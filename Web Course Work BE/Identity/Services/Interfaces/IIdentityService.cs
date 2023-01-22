using Identity.Data.DTOs;

namespace Identity.Services.Interfaces
{
    public interface IIdentityService
    {
        Task<UserReturnDTO> Login(UserLoginDTO loginDTO);
        Task<UserReturnDTO> Register(UserRegisterDTO registerDTO);
        Task<UserReturnDTO> ResetPassword(ResetPasswordDTO resetPasswordDTO);
    }
}