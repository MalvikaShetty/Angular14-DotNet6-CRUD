using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_cardDetails.Models;

namespace API_cardDetails.Models
{
    public class CardDetailContext:DbContext
    {
        public CardDetailContext(DbContextOptions<CardDetailContext> options) : base(options)
        {

        }

        public DbSet<CardDetail> CardDetails { get; set; }
    }
}
