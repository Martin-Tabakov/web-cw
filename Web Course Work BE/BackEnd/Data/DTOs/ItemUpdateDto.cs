using BackEnd.Data.Enums;
using System.ComponentModel.DataAnnotations;
using System.Configuration;

namespace BackEnd.Data.DTOs
{
    public class ItemUpdateDto
    {
        [Required]
        public Guid Id { get; set; }

        [Required]
        [MinLength(1)]
        [MaxLength(50)]
        public string Name { get; set; } = string.Empty;

        [Required]
        [MaxLength(2000)]
        public string Description { get; set; } = string.Empty;

        [Required]
        [RegularExpression(@"^\d+(\.\d{1,2})?$")]
        public decimal PurchasePrice { get; set; }

        [Required]
        [RegularExpression(@"^\d+(\.\d{1,2})?$")]
        public decimal RetailPrice { get; set; }

        [Required]
        [RegularExpression(@"^\d*$")]
        public int Quantity { get; set; }

        [Required]
        public string ProductCode { get; set; } = string.Empty;

        [Required]
        public Category Category { get; set; }
    }
}
