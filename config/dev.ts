export interface EnvironmentConfig {
    envName : string;
    awsAccount: string;
    awsRegion: string;

    ec2: {
        amiId: string;
        instanceType: string;
        keyName: string;
        securityGroupIds: string[];
        subnetId: string;
    }
    tags: {
        [key: string]: string;
    }    
}

const config: EnvironmentConfig = {
    envName : 'dev',
    awsAccount: '911167917923',
    awsRegion: 'ca-central-1',

    ec2: {
        amiId: 'ami-0bf6dbeae330f5823',
        instanceType: 't3.micro',
        keyName: 'HarunKP-Canada',
        securityGroupIds: ['sg-098d7da378b1ff075'],
        subnetId: 'subnet-05badfe3396ca4402',
    },
    tags: {
        Environment: 'dev',
        Project: 'Metroc'
    }
}
export default config;