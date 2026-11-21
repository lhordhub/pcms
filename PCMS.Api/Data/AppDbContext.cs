using Microsoft.EntityFrameworkCore;
using PCMS.Api.Models;

namespace PCMS.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Court> Courts => Set<Court>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Court>()
            .Property(c => c.HourlyRate)
            .HasPrecision(10, 2);
    }
}