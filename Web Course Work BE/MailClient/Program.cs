using MailClient;
using MailClient.Services;
using MailClient.Services.Interfaces;
using Microsoft.Extensions.Configuration;
using StackExchange.Redis;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var redisConnectionString = builder.Configuration["redisCache"];
ConnectionMultiplexer redis = ConnectionMultiplexer.Connect(redisConnectionString);
builder.Services.AddSingleton<IConnectionMultiplexer>(redis);

var settings = builder.Configuration.GetSection("fluentMail").Get<FluentConfig>();

builder.Services.AddFluentEmail(settings.Email).AddSmtpSender(settings.Host, settings.Port, settings.Username, settings.Password);

builder.Services.AddTransient<IEmailService, EmailService>();
builder.Services.AddTransient<ICacheService, CacheService>();

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("frontend",
        policy =>
        {
            policy.WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod();
        });
});
var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseCors("frontend");
app.UseAuthorization();

app.MapControllers();

app.Run();
