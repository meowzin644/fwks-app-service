using Microsoft.Extensions.DependencyInjection;

namespace Fwks.Libs.AspNetCore.Configuration;

public static class ApiConfiguration
{
    public static IServiceCollection AddDefaultApiConfiguration(this IServiceCollection services)
    {
        return services
            .AddDefaultResponseCompression()
            .AddDefaultVersioning();
    }
}
