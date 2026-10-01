import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
//import * as s3 from 'aws-cdk-lib/aws-s3';

export class MetrocCdkAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    // An EC2 Instance: AMI, InstanceType, Subnet, SecurityGroup, KeyPair
    
    const cfnInstance = new ec2.CfnInstance(this, 'MetroC-EC2-Instance', /* all optional props */ {
      imageId: 'ami-0bf6dbeae330f5823',
      instanceType: 't3.micro',
      keyName: 'HarunKP-Canada',
      securityGroupIds: ['sg-098d7da378b1ff075'],
      subnetId: 'subnet-05badfe3396ca4402',
      tags: [{
        key: 'Name',
        value: 'MyAppServer',
      }],
      
      //userData: 'userData',
    });



    // Create an RDS instance


  }
}
