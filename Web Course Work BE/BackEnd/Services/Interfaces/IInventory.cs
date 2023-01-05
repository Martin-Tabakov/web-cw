using BackEnd.Data.DTOs;

namespace BackEnd.Services.Interfaces
{
    public interface IInventory
    {
        Task<bool> Delete(Guid id);
        Task<IEnumerable<ItemReturnDto>> GetAll();
        Task<ItemReturnDto> GetById(Guid id);
        Task<ItemReturnDto> Create(ItemCreateDto dto);
        Task<ItemReturnDto> Update(ItemUpdateDto dto);
    }
}