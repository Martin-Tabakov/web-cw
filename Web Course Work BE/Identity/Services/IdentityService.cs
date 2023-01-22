using AutoMapper;
using Identity.Data;
using Identity.Data.DTOs;
using Identity.Data.Models;
using Identity.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Identity.Services
{
    public class IdentityService : IIdentityService
    {
        private Context _context;
        private readonly IMapper _mapper;
        public IdentityService(Context context,IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<UserReturnDTO> Register(UserRegisterDTO registerDTO)
        {
            var user = _mapper.Map<User>(registerDTO);
            var isDuplicate = (await _context.Users.FirstOrDefaultAsync(x => x.Email.Equals(user.Email))) != null;
            if (isDuplicate)
            {
                return null;
            }

            _context.Add(user);
            _context.SaveChanges();
            var result = _mapper.Map<UserReturnDTO>(user);

            return result;
        }

        public async Task<UserReturnDTO> Login(UserLoginDTO loginDTO)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Email.Equals(loginDTO.Email) && x.Password.Equals(loginDTO.Password));

            if (user == null) return null;

            return _mapper.Map<UserReturnDTO>(user);
        }

        public async Task<UserReturnDTO> ResetPassword(ResetPasswordDTO resetPasswordDTO)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Id.Equals(resetPasswordDTO.Id));
            if (user == null) return null;

            user.Password = resetPasswordDTO.NewPassword;
            await _context.SaveChangesAsync();

            return _mapper.Map<UserReturnDTO>(user);
        }
    }
}
