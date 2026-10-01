import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
//import * as s3 from 'aws-cdk-lib/aws-s3';

import { EnvironmentConfig } from '../config/dev';

export class MetrocCdkAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, config: EnvironmentConfig, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    // An EC2 Instance: AMI, InstanceType, Subnet, SecurityGroup, KeyPair
    
    const cfnInstance = new ec2.CfnInstance(this, 'MetroC-EC2-Instance', /* all optional props */ {
      imageId: config.ec2.amiId,
      instanceType: config.ec2.instanceType,
      keyName: config.ec2.keyName,
      securityGroupIds: config.ec2.securityGroupIds,
      subnetId: config.ec2.subnetId,
      tags: Object.entries(config.tags).map(([key, value]) => ({
        key,
        value,
      })),
      
      //userData: 'userData',
    });



    // Create an RDS instance


  }
}
