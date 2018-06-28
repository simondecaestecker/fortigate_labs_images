function FindProxyForURL(url, host) { 
    if (isInNet(host, "10.0.0.0", "255.0.0.0")) { return "DIRECT"; }
 
    return "PROXY 10.0.1.254:8080"; 
}
