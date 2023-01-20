using MailClient.Data.DTOs;
using MailClient.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace MailClient.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmailClient : ControllerBase
    {
        IEmailService _emailService;
        ICacheService _cacheService;

        public EmailClient(
            IEmailService emailService,
            ICacheService cacheService
            )
        {
            _emailService = emailService;
            _cacheService = cacheService;
        }

        [HttpPost]
        public void SendEmail([FromBody] EmailSendDto dto)
        {
            _emailService.SendEmail(dto.Email,dto.Id);
            _cacheService.SetId(dto.Id);
        }
    }
}