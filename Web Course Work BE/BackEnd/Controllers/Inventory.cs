using BackEnd.Data.DTOs;
using BackEnd.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Inventory : ControllerBase
    {
        private IInventory _inventory;

        public Inventory(IInventory inventory)
        {
            this._inventory = inventory;
        }

        [HttpGet]
        public async Task<IActionResult> GetById([FromQuery]Guid id)
        {
            var result = await _inventory.GetById(id);

            return Ok(result);
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAll()
        {
            var result = await _inventory.GetAll();

            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] ItemCreateDto dto)
        {
            var result = await _inventory.Create(dto);

            return Ok(result);
        }

        [HttpPatch]
        public async Task<IActionResult> Update([FromBody] ItemUpdateDto dto)
        {
            var result = await _inventory.Update(dto);

            return Ok(result);
        }

        [HttpDelete]
        public async Task<IActionResult> Delete([FromQuery] Guid id)
        {
            var result = await _inventory.Delete(id);

            return Ok(result);
        }

    }
}
