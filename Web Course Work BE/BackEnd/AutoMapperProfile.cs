using AutoMapper;
using BackEnd.Data.DTOs;
using BackEnd.Data.Models;

namespace BackEnd
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Item, ItemReturnDto>();
            CreateMap<ItemCreateDto, Item>();
            CreateMap<ItemUpdateDto, Item>();
        }
    }
}
