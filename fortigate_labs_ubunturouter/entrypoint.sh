#!/bin/bash

iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
iptables-save > /etc/iptables/rules.v4

service apache2 start

/bin/bash
