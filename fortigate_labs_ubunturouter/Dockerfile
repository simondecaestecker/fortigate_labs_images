FROM simondecaestecker/gns3_ubuntu_iptables:xenial
MAINTAINER Simon DECAESTECKER <contact@simondecaestecker.com>

RUN apt-get update -y && apt-get install -y apache2

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT "/entrypoint.sh"
