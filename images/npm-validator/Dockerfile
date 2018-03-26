FROM registry.fedoraproject.org/fedora:27

LABEL io.k8s.description="Thoth Dependency Monkey Validator for NPM" \
    io.k8s.display-name="Thoth: NPM Validator" \
    io.openshift.tags="thoth,nodejs,npm,dependency_monkey,validator" \
    architecture=x86_64 \
    name="aicoe/npm-validator" \
    vendor="Red Hat Office of the CTO - AI CoE" \
    license="GPLv3"

WORKDIR /opt/app-root/src

ENV APP_ROOT=/opt/app-root/ \
    NODEJS_VERSION=8 \
    NAME=nodejs \
    NPM_CONFIG_PREFIX=$HOME/.npm-global \
    PATH=$HOME/node_modules/.bin/:$HOME/.npm-global/bin/:$PATH

RUN dnf -y groupinstall --setopt=tsflags=nodocs 'Development Tools' && \
    dnf -y install --setopt=tsflags=nodocs nodejs && \
    dnf clean all && \
    mkdir /.npm-global /.npm /.config && \
    chown -R 1001:0 ${APP_ROOT} && chmod -R ug+rwx ${APP_ROOT} /.npm-global /.npm /.config

USER 1001

COPY validate /opt/app-root/src
COPY package.json /opt/app-root/src
COPY package-lock.json /opt/app-root/src

RUN npm install

ENTRYPOINT [ "/opt/app-root/src/validate" ]