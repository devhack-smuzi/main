pipeline {
    agent any

    environment {
        PORT = 80
        NETWORK = "mf-net"

        IMAGE_NAME = 'mf-navigation-img'
        CONT_NAME = 'mf-navigation'
    }

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t ${IMAGE_NAME}  .'
            }
        }
        stage('Run') {
            steps {
                sh 'docker rm -f ${CONT_NAME}'
                sh 'docker run -d \
                    --name ${CONT_NAME} \
                    --net ${NETWORK} \
                    ${IMAGE_NAME}' 
            }
        }
    }
}
