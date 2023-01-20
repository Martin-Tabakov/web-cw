namespace MailClient.Services.Interfaces
{
    public interface ICacheService
    {
        void clearId(Guid id);
        void SetId(Guid id);
    }
}