namespace MailClient.Services
{
    public interface ICacheService1
    {
        void clearId(Guid id);
        void SetId(Guid id);
    }
}