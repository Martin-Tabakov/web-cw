using AutoMapper;
using BackEnd.Data.DTOs;
using BackEnd.Data.Models;
using BackEnd.Services.Interfaces;
using MongoDB.Driver;

namespace BackEnd.Services
{
    public class Inventory : IInventory
    {
        private const string DatabaseName = "inventory";
        private const string CollectionName = "items";

        private readonly IMongoClient _client;
        private readonly IMongoDatabase _database;
        private readonly IMongoCollection<Item> _inventoryCollection;

        private readonly IMapper _mapper;

        public Inventory(MongoClient client, IMapper mapper)
        {
            this._client = client;
            this._database = _client.GetDatabase(DatabaseName);
            this._inventoryCollection = _database.GetCollection<Item>(CollectionName);

            this._mapper = mapper;
        }

        public async Task<ItemReturnDto> GetById(Guid id)
        {
            var res = await _inventoryCollection.FindAsync(x => x.Id == id);
            var item = await res.FirstOrDefaultAsync();

            return _mapper.Map<ItemReturnDto>(item);
        }

        public async Task<IEnumerable<ItemReturnDto>> GetAll()
        {
            var res = await _inventoryCollection.AsQueryable().ToListAsync();

            return res.Select(a => _mapper.Map<ItemReturnDto>(a));
        }

        public async Task<bool> Delete(Guid id)
        {
            var res = await _inventoryCollection.DeleteOneAsync(x => x.Id == id);

            return res.IsAcknowledged;
        }

        public async Task<ItemReturnDto> Create(ItemCreateDto dto)
        {
            var item = _mapper.Map<Item>(dto);
            await _inventoryCollection.InsertOneAsync(item);

            return _mapper.Map<ItemReturnDto>(item);
        }

        public async Task<ItemReturnDto> Update(ItemUpdateDto dto)
        {
            var item = _mapper.Map<Item>(dto);

            var res = await _inventoryCollection.ReplaceOneAsync(x => x.Id.Equals(item.Id), item);

            return _mapper.Map<ItemReturnDto>(item);
        }
    }
}
