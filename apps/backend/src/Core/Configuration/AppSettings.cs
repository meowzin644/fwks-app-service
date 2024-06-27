namespace Fwks.Core.Configuration;

public record AppSettings(SecuritySettings Security);

public record SecuritySettings(ObfuscationSettings Obfuscation);

public record ObfuscationSettings(string Alphabet, int MinLength);