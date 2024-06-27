using System;
using Fwks.Libs.Core.Security.Options;
using Sqids;

namespace Fwks.Libs.Core.Security;

public static class Obfuscator
{
    private static SqidsEncoder<int>? _instance;

    private static SqidsEncoder<int> Instance
    {
        get
        {
            _instance ??= new(new() { MinLength = 5 });

            return _instance;
        }
    }

    public static void Configure(Action<ObfuscatorOptions>? optionsBuilder = null)
    {
        var options = new ObfuscatorOptions();

        optionsBuilder?.Invoke(options);

        _instance = new SqidsEncoder<int>(new()
        {
            MinLength = options.MinLength,
            Alphabet = options.Alphabet
        });
    }

    public static string Encode(int value)
    {
        return Instance.Encode(value);
    }

    public static string Encode(int value, int salt)
    {
        return Instance.Encode(value, salt);
    }

    public static int Decode(string hash)
    {
        try
        {
            return Instance.Decode(hash)[0];
        }
        catch
        {
            return -1;
        }
    }
}
