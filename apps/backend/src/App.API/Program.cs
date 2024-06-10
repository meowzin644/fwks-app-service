using System;
using Fwks.Libs.AspNetCore.Configuration;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Serilog;

try
{
    SerilogConfiguration.Configure();

    var builder = WebApplication.CreateBuilder(args);

    var appSettings = builder.Configuration.Get<AppSettings>();

    builder.Host.UseSerilog();

    builder.Services
        .AddSingleton(appSettings!)
        .AddDefaultApiConfiguration();

    var app = builder.Build();

    await app.RunAsync();
}
catch (Exception ex)
{
    Log.Fatal(ex, "App terminated unexpectedly.");
}
finally
{
    Log.Information("App is shutting down.");

    await Log.CloseAndFlushAsync();
}

public record AppSettings();