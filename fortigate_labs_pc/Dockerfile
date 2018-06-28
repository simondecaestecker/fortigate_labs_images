FROM gns3/webterm
MAINTAINER Simon DECAESTECKER <contact@simondecaestecker.com>

RUN apt-get update -y && \
    apt-get install -y apache2 filezilla

ADD FortiGate_conf /FortiGate_conf

ADD entrypoint.sh /entrypoint.sh
RUN chmod +x entrypoint.sh
CMD [ "/entrypoint.sh" ]
