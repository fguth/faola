#
# build faola.css
#
SRC = lib/faola.less
VERSION = `cat VERSION | grep -o '[0-9]\.[0-9]\.[0-9]\+'`
HEADER = build/header.css
DIST = dist/faola-${VERSION}.css
DIST_MIN = dist/faola-${VERSION}.min.css

faola:
	@@mkdir -p dist
	@@cat ${HEADER} | sed s/@VERSION/${VERSION}/ > ${DIST}
	@@cat ${HEADER} | sed s/@VERSION/${VERSION}/ > ${DIST_MIN}
	lessc ${SRC} >> ${DIST}
	lessc -x ${SRC} >> ${DIST_MIN}
	@@echo ${DIST} built.

clean:
	rm dist/*