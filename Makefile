FRONT_CCCEV_DOCKERFILE	:= infra/docker/cccev-web-app/Dockerfile
FRONT_CCCEV_NAME	    := smartbcity/cccev-web-app
FRONT_CCCEV_IMG	    	:= ${FRONT_CCCEV_NAME}:${VERSION}
FRONT_CCCEV_LATEST		:= ${FRONT_CCCEV_NAME}:latest

CCCEV_APP_NAME	   	 	:= smartbcity/cccev-gateway
CCCEV_APP_IMG	    	:= ${CCCEV_APP_NAME}:${VERSION}
CCCEV_APP_LATEST		:= ${CCCEV_APP_NAME}:latest
CCCEV_APP_PACKAGE	   	:= :api-gateway:bootBuildImage


package: package-cccev-front package-cccev-api

push: push-cccev-front push-cccev-api

push-latest: push-latest-cccev-front push-latest-cccev-api


package-cccev-api:
	VERSION=${VERSION} ./gradlew build ${CCCEV_APP_PACKAGE}

push-cccev-api:
	@docker push ${CCCEV_APP_IMG}

push-latest-cccev-api:
	@docker tag ${CCCEV_APP_IMG} ${CCCEV_APP_LATEST}
	@docker push ${CCCEV_APP_LATEST}

package-cccev-front:
	@docker build -f ${FRONT_CCCEV_DOCKERFILE} -t ${FRONT_CCCEV_IMG} .

push-cccev-front:
	@docker push ${FRONT_CCCEV_IMG}

push-latest-cccev-front:
	@docker tag ${FRONT_CCCEV_IMG} ${FRONT_CCCEV_LATEST}
	@docker push ${FRONT_CCCEV_LATEST}
