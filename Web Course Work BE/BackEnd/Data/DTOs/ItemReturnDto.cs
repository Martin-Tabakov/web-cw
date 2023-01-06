using BackEnd.Data.Enums;

namespace BackEnd.Data.DTOs
{
    public class ItemReturnDto
    {
        public Guid Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public decimal PurchasePrice { get; set; }

        public decimal RetailPrice { get; set; }

        public int Quantity { get; set; }

        public string ProductCode { get; set; } = string.Empty;

        public Category Category { get; set; }
    }
}
