#!/bin/sh

cd $(dirname $0)

JARS=lib/'*':lib_odf/'*'
MAIN_CLASS=edu.stanford.smi.protege.Application
OPTIONS=-Xmx1000M
ENCODING=-Dfile.encoding=UTF-8

# uncomment this to check correct classpath

# echo $JARS

# java must be on your PATH variable or change this to point your JVM installation

java $OPTIONS $ENCODING -cp .:clojure:$JARS $MAIN_CLASS
