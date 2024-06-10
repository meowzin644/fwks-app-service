using Microsoft.Extensions.DependencyInjection;
using Asp.Versioning;

namespace Fwks.Libs.AspNetCore.Configuration;

public static class VersioningConfiguration
{
    public static IServiceCollection AddDefaultVersioning(this IServiceCollection services)
    {
        return services
            .AddApiVersioning(x =>
            {
                x.DefaultApiVersion = new ApiVersion(1, 0);
                x.AssumeDefaultVersionWhenUnspecified = true;
                x.ReportApiVersions = true;
            })
            .AddApiExplorer(x =>
            {
                x.GroupNameFormat = "'v'VVV";
                x.SubstituteApiVersionInUrl = true;
            })
            .Services;
    }
}
