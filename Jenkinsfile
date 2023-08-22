pipeline {
    agent any

    environment {
        BRANCH_NAME = "${GIT_BRANCH}"
        DOCKER_IMAGE_NAME = "shroom-ui:${BRANCH_NAME}"
        DOCKER_REPO = "tombriggs/shroom-ui"
        DOCKER_TAG = "${DOCKER_REPO}:${BRANCH_NAME}"
    }
    stages {
        stage('Build') {
            steps {
                echo "Building branch: ${BRANCH_NAME}"
                    
                sh "docker build . -t ${DOCKER_IMAGE_NAME}"
                sh "docker tag ${DOCKER_IMAGE_NAME} ${DOCKER_TAG}"
                sh "docker push ${DOCKER_TAG}"
            }
        }
        stage('Deploy') {
            steps {                  
                sh "docker run -p 3000:3000 -d ${DOCKER_IMAGE_NAME}"
            }
        }
    }
}