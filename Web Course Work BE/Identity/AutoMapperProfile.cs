using AutoMapper;
using Identity.Data.DTOs;
using Identity.Data.Models;

namespace BackEnd
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserReturnDTO>();
            CreateMap<UserLogInDto, User>();
            CreateMap<UserRegisterDTO, User>();
        }
    }
}
