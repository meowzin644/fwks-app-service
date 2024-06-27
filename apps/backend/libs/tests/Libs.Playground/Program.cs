using System;
using System.IO;
using Fwks.SmartRD.App.Api.Configuration;
using Microsoft.Extensions.Configuration;

try
{
    var connectionString = new ConfigurationBuilder()
        .SetBasePath(@"D:\git\fwks\smartrd\apps\backend\src\App.Api")
        .AddJsonFile("appsettings.json")
        .Build().Get<AppSettings>()!
        .Persistence.Postgres.ConnectionString;
}
catch (Exception ex)
{
    Console.WriteLine(ex.Message);
}

internal record EntityStub(Guid Id);