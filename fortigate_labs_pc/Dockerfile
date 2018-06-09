FROM gns3/webterm
MAINTAINER Simon DECAESTECKER <contact@simondecaestecker.com>

RUN apt-get update -y && \
    apt-get install -y apache2 filezilla

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT "/entrypoint.sh"
