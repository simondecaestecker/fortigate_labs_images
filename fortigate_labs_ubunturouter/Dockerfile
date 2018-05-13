FROM simondecaestecker/gns3_ubuntu_iptables:xenial
MAINTAINER Simon DECAESTECKER <contact@simondecaestecker.com>

RUN apt-get update -y && \
    apt-get install -y debconf-utils

RUN echo "proftpd-basic shared/proftpd/inetd_or_standalone select standalone" | debconf-set-selections

RUN apt-get install -y apache2 proftpd

ADD proftpd.conf /etc/proftpd/proftpd.conf
RUN mkdir /srv/ftp/pub
ADD eicar.com /srv/ftp/pub/eicar.com

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT "/entrypoint.sh"
