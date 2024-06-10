using Microsoft.AspNetCore.ResponseCompression;
using System.IO.Compression;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;

namespace Fwks.Libs.AspNetCore.Configuration;

public static class ResponseCompressionConfiguration
{
    public static IServiceCollection AddDefaultResponseCompression(this IServiceCollection services)
    {
        return services
            .Configure<GzipCompressionProviderOptions>(x => x.Level = CompressionLevel.Optimal)
            .Configure<BrotliCompressionProviderOptions>(x => x.Level = CompressionLevel.Optimal)
            .AddResponseCompression(x =>
            {
                x.EnableForHttps = true;
                x.Providers.Add<GzipCompressionProvider>();
                x.Providers.Add<BrotliCompressionProvider>();
            });
    }
}
