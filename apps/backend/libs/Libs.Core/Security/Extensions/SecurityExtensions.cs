﻿namespace Fwks.Libs.Core.Security.Extensions;

public static class SecurityExtensions
{
    public static int Decode(this string str) => Obfuscator.Decode(str);
    public static string Encode(this int number) => Obfuscator.Encode(number);
    public static string Encode(this int number, int salt) => Obfuscator.Encode(number, salt);
}
