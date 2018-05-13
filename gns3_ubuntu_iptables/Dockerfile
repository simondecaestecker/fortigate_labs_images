FROM gns3/ubuntu:xenial
MAINTAINER Simon DECAESTECKER <contact@simondecaestecker.com>

RUN apt-get update && apt-get upgrade -y && apt-get install -y iptables iptables-persistent

#CMD sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE && \
#	iptables-save > /etc/iptables/rules.v4
