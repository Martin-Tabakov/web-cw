namespace MailClient.Services.Interfaces
{
    public interface IEmailService
    {
        void SendEmail(string EmailAddress, Guid id);
    }
}