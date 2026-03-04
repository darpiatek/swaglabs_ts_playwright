pipeline {
    agent any

    parameters {
        choice(
            name: 'ENV',
            choices: ['tst', 'dev'],
            description: 'Select environment'
        )
        choice(
            name: 'LOG_LEVEL',
            choices: ['info', 'debug', 'warn', 'error'],
            description: 'Select log level'
        )
    }

    environment {
        PATH = "/opt/homebrew/bin:${env.PATH}"
        ENV = "${params.ENV}"
        LOG_LEVEL = "${params.LOG_LEVEL}"
    }

    stages {

        stage('Install dependencies') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm ci'
                sh 'npx playwright install'
            }
        }

        stage('Run Playwright tests') {
            steps {
                withCredentials([string(credentialsId: 'secret-key', variable: 'SECRET_KEY')]) {

                    sh '''
                        echo "Running on ENV=$ENV"
                        echo "LOG_LEVEL=$LOG_LEVEL"
                        npx playwright test
                    '''
                }
            }
        }
    }

    post {
        always {
            allure(
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
            )
        }
    }
}