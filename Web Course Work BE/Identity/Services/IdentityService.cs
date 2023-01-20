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
    }
}
