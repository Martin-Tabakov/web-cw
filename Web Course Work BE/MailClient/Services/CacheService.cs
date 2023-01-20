using MailClient.Services.Interfaces;
using StackExchange.Redis;

namespace MailClient.Services
{
    public class CacheService : ICacheService
    {
        private IConnectionMultiplexer _conection;

        public CacheService(IConnectionMultiplexer connection)
        {
            _conection = connection;
        }

        public void SetId(Guid id)
        {
            _conection.GetDatabase().StringSet($"user:{id}", true, TimeSpan.FromSeconds(600));
        }

        public void clearId(Guid id)
        {
            _conection.GetDatabase().KeyDelete($"user:{id}");
        }
    }
}
