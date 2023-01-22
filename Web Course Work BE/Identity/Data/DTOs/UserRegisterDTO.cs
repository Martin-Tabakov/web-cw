using System.ComponentModel.DataAnnotations;

namespace Identity.Data.DTOs
{
    public class UserRegisterDTO
    {
        [Required]
        [MinLength(5)]
        [MaxLength(15)]
        public string Username { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        public string Phone { get; set; } = String.Empty;
        [Required]
        public string Password { get; set; }
    }
}
