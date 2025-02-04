/**
 * Infrahub-API
 * Leverage the Infrahub API and Hyperstack platform to easily create, manage, and scale powerful GPU virtual machines and their associated resources.   Access this SDK to automate the deployment of your workloads and streamline your infrastructure management.  To contribute, please raise an issue with a bug report, feature request, feedback, or general inquiry.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreateSecurityRulePayload model module.
 * @module model/CreateSecurityRulePayload
 * @version v1.25.0-alpha
 */
class CreateSecurityRulePayload {
    /**
     * Constructs a new <code>CreateSecurityRulePayload</code>.
     * @alias module:model/CreateSecurityRulePayload
     * @param direction {String} The direction of traffic that the firewall rule applies to.
     * @param ethertype {String} The Ethernet type associated with the rule.
     * @param protocol {module:model/CreateSecurityRulePayload.ProtocolEnum} The network protocol associated with the rule. Call the [`GET /core/sg-rules-protocols`](https://infrahub-api-doc.nexgencloud.com/#get-/core/sg-rules-protocols) endpoint to retrieve a list of permitted network protocols.
     * @param remoteIpPrefix {String} The IP address range that is allowed to access the specified port. Use \"0.0.0.0/0\" to allow any IP address.
     */
    constructor(direction, ethertype, protocol, remoteIpPrefix) { 
        
        CreateSecurityRulePayload.initialize(this, direction, ethertype, protocol, remoteIpPrefix);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, direction, ethertype, protocol, remoteIpPrefix) { 
        obj['direction'] = direction;
        obj['ethertype'] = ethertype;
        obj['protocol'] = protocol;
        obj['remote_ip_prefix'] = remoteIpPrefix;
    }

    /**
     * Constructs a <code>CreateSecurityRulePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSecurityRulePayload} obj Optional instance to populate.
     * @return {module:model/CreateSecurityRulePayload} The populated <code>CreateSecurityRulePayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateSecurityRulePayload();

            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
            if (data.hasOwnProperty('ethertype')) {
                obj['ethertype'] = ApiClient.convertToType(data['ethertype'], 'String');
            }
            if (data.hasOwnProperty('protocol')) {
                obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
            }
            if (data.hasOwnProperty('remote_ip_prefix')) {
                obj['remote_ip_prefix'] = ApiClient.convertToType(data['remote_ip_prefix'], 'String');
            }
            if (data.hasOwnProperty('port_range_min')) {
                obj['port_range_min'] = ApiClient.convertToType(data['port_range_min'], 'Number');
            }
            if (data.hasOwnProperty('port_range_max')) {
                obj['port_range_max'] = ApiClient.convertToType(data['port_range_max'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateSecurityRulePayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateSecurityRulePayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateSecurityRulePayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['direction'] && !(typeof data['direction'] === 'string' || data['direction'] instanceof String)) {
            throw new Error("Expected the field `direction` to be a primitive type in the JSON string but got " + data['direction']);
        }
        // ensure the json data is a string
        if (data['ethertype'] && !(typeof data['ethertype'] === 'string' || data['ethertype'] instanceof String)) {
            throw new Error("Expected the field `ethertype` to be a primitive type in the JSON string but got " + data['ethertype']);
        }
        // ensure the json data is a string
        if (data['protocol'] && !(typeof data['protocol'] === 'string' || data['protocol'] instanceof String)) {
            throw new Error("Expected the field `protocol` to be a primitive type in the JSON string but got " + data['protocol']);
        }
        // ensure the json data is a string
        if (data['remote_ip_prefix'] && !(typeof data['remote_ip_prefix'] === 'string' || data['remote_ip_prefix'] instanceof String)) {
            throw new Error("Expected the field `remote_ip_prefix` to be a primitive type in the JSON string but got " + data['remote_ip_prefix']);
        }

        return true;
    }


}

CreateSecurityRulePayload.RequiredProperties = ["direction", "ethertype", "protocol", "remote_ip_prefix"];

/**
 * The direction of traffic that the firewall rule applies to.
 * @member {String} direction
 */
CreateSecurityRulePayload.prototype['direction'] = undefined;

/**
 * The Ethernet type associated with the rule.
 * @member {String} ethertype
 */
CreateSecurityRulePayload.prototype['ethertype'] = undefined;

/**
 * The network protocol associated with the rule. Call the [`GET /core/sg-rules-protocols`](https://infrahub-api-doc.nexgencloud.com/#get-/core/sg-rules-protocols) endpoint to retrieve a list of permitted network protocols.
 * @member {module:model/CreateSecurityRulePayload.ProtocolEnum} protocol
 */
CreateSecurityRulePayload.prototype['protocol'] = undefined;

/**
 * The IP address range that is allowed to access the specified port. Use \"0.0.0.0/0\" to allow any IP address.
 * @member {String} remote_ip_prefix
 */
CreateSecurityRulePayload.prototype['remote_ip_prefix'] = undefined;

/**
 * @member {Number} port_range_min
 */
CreateSecurityRulePayload.prototype['port_range_min'] = undefined;

/**
 * @member {Number} port_range_max
 */
CreateSecurityRulePayload.prototype['port_range_max'] = undefined;





/**
 * Allowed values for the <code>protocol</code> property.
 * @enum {String}
 * @readonly
 */
CreateSecurityRulePayload['ProtocolEnum'] = {

    /**
     * value: "any"
     * @const
     */
    "any": "any",

    /**
     * value: "ah"
     * @const
     */
    "ah": "ah",

    /**
     * value: "dccp"
     * @const
     */
    "dccp": "dccp",

    /**
     * value: "egp"
     * @const
     */
    "egp": "egp",

    /**
     * value: "esp"
     * @const
     */
    "esp": "esp",

    /**
     * value: "gre"
     * @const
     */
    "gre": "gre",

    /**
     * value: "hopopt"
     * @const
     */
    "hopopt": "hopopt",

    /**
     * value: "icmp"
     * @const
     */
    "icmp": "icmp",

    /**
     * value: "igmp"
     * @const
     */
    "igmp": "igmp",

    /**
     * value: "ip"
     * @const
     */
    "ip": "ip",

    /**
     * value: "ipip"
     * @const
     */
    "ipip": "ipip",

    /**
     * value: "ipv6-encap"
     * @const
     */
    "ipv6-encap": "ipv6-encap",

    /**
     * value: "ipv6-frag"
     * @const
     */
    "ipv6-frag": "ipv6-frag",

    /**
     * value: "ipv6-icmp"
     * @const
     */
    "ipv6-icmp": "ipv6-icmp",

    /**
     * value: "icmpv6"
     * @const
     */
    "icmpv6": "icmpv6",

    /**
     * value: "ipv6-nonxt"
     * @const
     */
    "ipv6-nonxt": "ipv6-nonxt",

    /**
     * value: "ipv6-opts"
     * @const
     */
    "ipv6-opts": "ipv6-opts",

    /**
     * value: "ipv6-route"
     * @const
     */
    "ipv6-route": "ipv6-route",

    /**
     * value: "ospf"
     * @const
     */
    "ospf": "ospf",

    /**
     * value: "pgm"
     * @const
     */
    "pgm": "pgm",

    /**
     * value: "rsvp"
     * @const
     */
    "rsvp": "rsvp",

    /**
     * value: "sctp"
     * @const
     */
    "sctp": "sctp",

    /**
     * value: "tcp"
     * @const
     */
    "tcp": "tcp",

    /**
     * value: "udp"
     * @const
     */
    "udp": "udp",

    /**
     * value: "udplite"
     * @const
     */
    "udplite": "udplite",

    /**
     * value: "vrrp"
     * @const
     */
    "vrrp": "vrrp"
};



export default CreateSecurityRulePayload;

