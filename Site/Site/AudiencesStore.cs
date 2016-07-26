using Microsoft.Owin.Security.DataHandler.Encoder;
using System;
using System.Collections.Concurrent;
using System.Security.Cryptography;

namespace QuantumFactory.tuServicio.Site
{
    public static class AudiencesStore
    {
        public static ConcurrentDictionary<string, Audience> AudiencesList = new ConcurrentDictionary<string, Audience>();

        public static Audience AddAudience(string name)
        {
            var clientId = Guid.NewGuid().ToString("N");
            var key = new byte[32];
            RandomNumberGenerator.Create().GetBytes(key);
            var base64Secret = TextEncodings.Base64Url.Encode(key);
            Audience newAudience = new Audience { ClientId = clientId, Base64Secret = base64Secret, Name = name };
            AudiencesList.TryAdd(clientId, newAudience);
            return newAudience;
        }

        public static Audience FindAudience(string clientId)
        {
            Audience audience = null;
            AudiencesList.TryGetValue(clientId, out audience);
            return audience;
        }
    }
}