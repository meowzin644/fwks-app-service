using System;
using Microsoft.Extensions.Configuration;
using Serilog;

namespace Fwks.Libs.AspNetCore.Configuration;

public static class SerilogConfiguration
{
    public static void Configure()
    {
        var configuration = new ConfigurationBuilder()
            .SetBasePath(Environment.CurrentDirectory)
            .AddJsonFile("appsettings.json")
            .AddEnvironmentVariables()
            .Build();

        Log.Logger = new LoggerConfiguration()
            .ReadFrom.Configuration(configuration)
            .CreateLogger();
    }
}
