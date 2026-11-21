using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PCMS.Api.Data;
using PCMS.Api.Models;

namespace PCMS.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CourtsController : ControllerBase
{
    private readonly AppDbContext _db;

    public CourtsController(AppDbContext db)
    {
        _db = db;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Court>>> GetAll()
    {
        return await _db.Courts.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Court>> GetById(int id)
    {
        var court = await _db.Courts.FindAsync(id);
        return court is null ? NotFound() : court;
    }

    [HttpPost]
    public async Task<ActionResult<Court>> Create(Court court)
    {
        _db.Courts.Add(court);
        await _db.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = court.Id }, court);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, Court court)
    {
        if (id != court.Id) return BadRequest();
        _db.Entry(court).State = EntityState.Modified;
        await _db.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var court = await _db.Courts.FindAsync(id);
        if (court is null) return NotFound();
        _db.Courts.Remove(court);
        await _db.SaveChangesAsync();
        return NoContent();
    }
}