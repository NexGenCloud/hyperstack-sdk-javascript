# HyperstackApi.CreateFirewallRulePayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | **String** | The direction of traffic that the firewall rule applies to. | 
**ethertype** | **String** | The Ethernet type associated with the rule. | 
**portRangeMax** | **Number** | The maximum port number in the range of ports to be allowed by the firewall rule. | [optional] 
**portRangeMin** | **Number** | The minimum port number in the range of ports to be allowed by the firewall rule. | [optional] 
**protocol** | **String** | The network protocol associated with the rule. Call the [&#x60;GET /core/sg-rules-protocols&#x60;](https://infrahub-api-doc.nexgencloud.com/#get-/core/sg-rules-protocols) endpoint to retrieve a list of permitted network protocols. | 
**remoteIpPrefix** | **String** | The IP address range that is allowed to access the specified port. Use \&quot;0.0.0.0/0\&quot; to allow any IP address. | 



## Enum: ProtocolEnum


* `any` (value: `"any"`)

* `ah` (value: `"ah"`)

* `dccp` (value: `"dccp"`)

* `egp` (value: `"egp"`)

* `esp` (value: `"esp"`)

* `gre` (value: `"gre"`)

* `hopopt` (value: `"hopopt"`)

* `icmp` (value: `"icmp"`)

* `igmp` (value: `"igmp"`)

* `ip` (value: `"ip"`)

* `ipip` (value: `"ipip"`)

* `ipv6-encap` (value: `"ipv6-encap"`)

* `ipv6-frag` (value: `"ipv6-frag"`)

* `ipv6-icmp` (value: `"ipv6-icmp"`)

* `icmpv6` (value: `"icmpv6"`)

* `ipv6-nonxt` (value: `"ipv6-nonxt"`)

* `ipv6-opts` (value: `"ipv6-opts"`)

* `ipv6-route` (value: `"ipv6-route"`)

* `ospf` (value: `"ospf"`)

* `pgm` (value: `"pgm"`)

* `rsvp` (value: `"rsvp"`)

* `sctp` (value: `"sctp"`)

* `tcp` (value: `"tcp"`)

* `udp` (value: `"udp"`)

* `udplite` (value: `"udplite"`)

* `vrrp` (value: `"vrrp"`)




