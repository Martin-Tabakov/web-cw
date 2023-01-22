using System.ComponentModel.DataAnnotations;

namespace Identity.Data.DTOs
{
    public class UserReturnDTO
    {
        public Guid Id { get; set; }

        public string Username { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

    }
}
