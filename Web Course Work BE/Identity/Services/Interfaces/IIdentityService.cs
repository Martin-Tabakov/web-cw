using Identity.Data.DTOs;

namespace Identity.Services.Interfaces
{
    public interface IIdentityService
    {
        Task<UserReturnDTO> Register(UserRegisterDTO registerDTO);
    }
}