using Identity.Data.DTOs;
using Identity.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Identity.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Identity : ControllerBase
    {
        private readonly IIdentityService _identityService;

        public Identity(IIdentityService identityService)
        {
            this._identityService = identityService;
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody] UserRegisterDTO registerDto)
        {
            var result = await _identityService.Register(registerDto);

            if(result is null) return BadRequest(result);

            return Ok(result);
        }
    }

}
