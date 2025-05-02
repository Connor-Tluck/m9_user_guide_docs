# 

# 

# 

# **![][image1]**

# **Digital Surveyor User Guide**

Updated April 2025

# 

[**Overview	3**](#overview)

[**Homepage	4**](#homepage)

[**Uploading Datasets	5**](#uploading-datasets)

[**Attribute Templates	6**](#attribute-templates)

[Creating New Layers	6](#creating-new-layers)

[Adding Subattributes	9](#adding-subattributes)

[Creating Linear Feature Layers	12](#creating-linear-feature-layers)

[Creating Sign Features	13](#creating-sign-features)

[**Running Perception	14**](#running-perception)

[**Objects QA/QC Workflow	17**](#objects-qa/qc-workflow)

[**Linear Features QA/QC Workflow	24**](#linear-features-qa/qc-workflow)

[**Sign Assembly QA/QC Workflow	30**](#sign-assembly-qa/qc-workflow)

[Sign Assembly Troubleshooting	36](#sign-assembly-troubleshooting)

# **Overview** {#overview}

![][image2]

Mach9 is a feature extraction software similar to existing extraction tools in the marketplace. Data acquisition, Calibration and processing is completed before uploading to Digital Surveyor. 

Once data is collected and uploaded to Digital Surveyor, we utilize what is called an “attribute template” to encase all desired extracted features. After the desired attributes are defined, a perception request can be triggered where Digital Surveyor delivers a first draft of the extracted features. Following the automated extraction, quality assurance (QA) and quality check (QC) can be performed within Digital Surveyor before exporting the final deliverable. The steps are outlined below.

# **![][image3]**

# **Homepage** {#homepage}

Pictured below  is the “Homepage”. When you first log into your account, you will see the above homepage. Begin by selecting the dataset you wish to view. 

![][image4]

Once you have selected the dataset you would like to view, click on the “view dataset in viewer” icon circled in red below.

![][image5]  
	

# 

# **Uploading Datasets** {#uploading-datasets}

In the Folders & Files menu click “Upload data”.  
![][image6]

Select “Mobile LiDAR data” where a dropdown menu will appear for uploading third-party datasets.  
![][image7]

Enter a desired name for the dataset and select the dataset type. For Leica and Optech datasets, use the Generic Topodot option. You will need to navigate to the folder containing your zipped export for the file selection. You may proceed with the upload process after you select “Upload” on the bottom right  
![][image8]

# **Attribute Templates** {#attribute-templates}

In the following section, we will show you how to create attribute templates from scratch. However, Mach9’s digital surveyor allows you to easily select from previously created attribute templates to streamline your experience. If you already have an attribute template, please continue to the “Running Perception” section.

## **Creating New Layers**  {#creating-new-layers}

The following steps will assist you in getting started with “Attribute Templates” in Digital Surveyor. In your folders and files, you will need to select the “Upload data” dropdown on the right hand side of the screen and click on “Template”.![][image9]  
Once you have selected a template, you will be navigated to the template creation page where you will add your desired attributes as layers. Your first step is to select on the “Add New Layer” button or select a file to upload a geodatabase file (GDB) as indicated below.  
![][image10]

After selecting “Add New Layer”, you will be able to input the name of the feature in the box indicated with the green outline below. You will then select the “+ Add” button beside the box to proceed with next steps.![][image11]

The next step will require you to select on the dropdown menu with the green outline indicated below. You can see below a variety of options to select from. In the case of object features and some linear features, select “Feature Type” from the dropdown menu. ![][image12]

You will then select from the adjacent dropdown menu to select the feature you would like to extract. The dropdown menu provides you with a list of Mach9 supported features.  
![][image13]

In the case where you do not need to add additional rules or provide subattributes, you can simply select “Add Layer” indicated with the blue bar. ![][image14]

## **Adding Subattributes** {#adding-subattributes}

There are scenarios where you may want to add subattributes, which may include but are not limited to inclination, condition, content and measurements. In the following example, you will be able to add a new subattribute for the utility pole feature using the “Add new subattribute” button circled in red below.  
![][image15]  
When you add a new subattribute, a pop-up window will allow you to indicate the name of the subattribute, select the data type and select a data source.![][image16]  
For example, you can identify the inclination subattribute of the utility pole. You will then select the data type, which is integer (int) for this case. Finally, associate the data source represented by "inclination" in the dropdown menu.![][image17]

In certain cases, you may also want to restrict subattribute values. For example, you can create a list representing the condition of the utility pole. You can see below that the condition is represented by either “Good”, “Fair” or “Bad”. Select “Submit” once you are satisfied.

![][image18]

## 

## **Creating Linear Feature Layers** {#creating-linear-feature-layers}

For some linear features like roadway centerlines, you may also like to indicate the paint color and paint pattern. Below is an example of a layer created for the solid white centerline feature. ![][image19]

# 

# 

# 

# 

## **Creating Sign Features** {#creating-sign-features}

For signs, you will need to create a feature type with the sign face. Below is a sample of the sign feature with subattributes including Manual on Uniform Traffic Control Devices (MUTCD) codes, condition of the signs, and the associated sign assembly ID.

![][image20]

# **Running Perception** {#running-perception}

Running a perception request is the trigger to begin the automated geospatial extraction process within Digital Surveyor. To start, select the “Create Perception Request” button (green).

![][image21]

The next step will allow you to select the desired attribute template for the perception attribute. This will help identify which features to extract from the process. You may create a new template which will bring you back to the “Attribute Template” step or click on “Select existing template since we have already created a template in the previous step.  
![][image22]

You will be brought to the attribute template selection screen where you will locate and select the desired template to use.

![][image23]

You will then have the option to adjust settings, which includes adding new layers or deselecting certain features from the extraction process. Once you are satisfied with the feature selection, click on “Confirm settings” on the bottom right. 

![][image24]

During the “Select Area” stage, you use the selection icon on the top left of the map indicated in sky blue to select the desired area to run the perception request. You will be able to see the selected area, which will be indicated on the map in blue. Once you have identified the area of interest, please click the “Submit” button.  
![][image25]

A pop-up window will appear for you to confirm the perception request. You can also enter the desired emails to notify once the extraction process is complete. You may also leave the email section blank and simply click submit. After the extraction process is complete, you can proceed to the QA/QC workflows depending on the type of features you would like to extract. ![][image26]

# **Objects QA/QC Workflow** {#objects-qa/qc-workflow}

The following objects QA/QC workflow will allow you to adjust, verify and delete objects within Digital Surveyor.

**Step 1:** Once the dataset has loaded in, head to the bottom left of your screen and click on the filter icon. The following is where can filter by objects or lines, QA state, template layers, perception runs, and sources.  
![][image27]

**Step 2:** Move your cursor to hover on the object's filter and select which extracted features you would like to view. You will be able to filter out exactly which features you want to see.  
![][image28]

**Tip:** You may further filter out the selected features using the “sort by” or “ascending/descending” order buttons to narrow your search.

![][image29]  
![][image30]

**Step 3:** Under the “Features” table on the bottom left, click the crosshair icon (highlighted in blue) on the first extracted feature. This will directly fly you to the object. You can also just click on the text of the extracted object and press “F” hotkey on the keyboard.   
![][image31]

**Step 4:** You are now viewing the first extracted feature. All default information and additional subattribute template information will be located on the scrollable feature information panel on the right side. Check the extracted features characteristics using the tools explained below (as needed) before approving or deleting an object. You can select on the object (left-click) and hold down to move the object around.  
![][image32]

**Tip:** Click the “Lock camera” icon (indicated below) in the feature information panel or press "L" on the keyboard to fix the camera movement about the feature and pan controls now orbit around the feature.  
![][image33]

**Tip:** Click the “See image” icon in the feature information panel or press "C" on the keyboard to access the image view.  
![][image34]

**Tip:** If you need to make any changes to the objects, the following will help you with adjusting dimensions and orientation. The dimension nodes circled in red below will adjust the dimensions.  
![][image35]

**Tip:** The rotation wheel circled in red below will adjust the orientation.  
![][image36]  
**Tip:** To lock the feature and pivot, hold “ctrl” on your keyboard.

**Tip:** If you want to see additional options, right-click a feature for actions including rotate 180 degrees, split horizontally, split vertically and more. You will be able to find more details on [https://docs.mach9.io/docs/Editing-Features/](https://docs.mach9.io/docs/Editing-Features/).   
![][image37]

Tip: You can use the cross section tool (the cross-section icon at the top bar or the option when you right-click). This will allow you to see the object from another perspective for verification of sub-attributes.

![][image38]

**Step 5:** Once adjustments have been made to the extracted feature, you can either approve or delete the object. You can click on the buttons or use the keyboard hotkeys “E” for approval or “R” for deletion. 

![][image39]

**Step 6:** To head to the next extracted feature simply click on its crosshair icon under the features table or use the keyboard hotkeys “+” and “-” to move up and down the list.

#  **Linear Features QA/QC Workflow** {#linear-features-qa/qc-workflow}

**Step 1:** To begin, complete 2D adjustments before taking any cross-sections or resampling lines. It is recommended to use plan view to ensure all lines are there with a low degree of spatial precision and that all lines are connected as desired. Plan view will allow you to make quick x-y adjustments while ignoring elevation changes.  
![][image40]

**Tip:** To manually adjust lines, grab the linear vertices (indicated by the red circles).  
![][image41]

**Tip:** Use the merge tool by right clicking on a line or using the keyboard hotkey “M” to combine split lines of the same type (highlighted in light blue).  
![][image42]

**Tip:** Right click on a line (not on the vertices) to bring out additional options including duplicate spline, resample spline and drape spline to ground.   
![][image43]

**Tip:** You can use the cross section tool (identified with the blue square outline on the top bar) for specific areas of interest. The cross section view is on the right side.   
![][image44]

**Tip**: use the Auto-Join Tool to merge multiple lines at once.  
![][image45]

* Use the mass select tool to grab the lines you would like to auto merge and select “Merge Lines” when the table pops up on the right hand of your screen. Select your parameters on deflection angle, gap tolerance, and dedupe threshold.  
  ![][image46]

**Step 2:** Filter out all objects and curbed lines so that only road line centerlines and EOP are shown. Use the mass select tool to grab all remaining lines and select the “Resample Lines” button. Set to your desired intervals and tolerance level.

![][image47]

**Step 3:** Similarly to **Step 2,** we will use the global resample again except this time it will be for curb lines only. Filter out all your objects and roadlines centerline features until only front, back, bottom, top and curb gutter lines are showing. Use the mass select tool to grab all of your curbed lines. Hit “Resample lines” and set to your desired interval and tolerance level

![][image48]

**Step 4:** Use the “Stencilized Resample” tool at specific areas of interest that require a more in depth analysis. After selecting the tool, left click to place vertices as you draw your stencilized line. Press the spacebar on your keyboard after you indicate your desired linear section.   
![][image49]

**Tip:** A pop-up window will appear on the bottom where you can decide to complete the step manually, with uniform intervals between points or adaptive where you can add in tolerance levels at a desired interval. You will then adjust the window width to encompass your desired lines to be resampled.  
![][image50]

**Tip:** Hold Shift when placing a “Stencilized Resample” to use existing lines for placement and cross sections.  
![][image51]

**Step 5:** Depending on how your lines have resampled you may need to add resolution on curb cuts or rounded corners. Create a smaller “Stencilized Resample” section for that specific feature that needs higher resolution.   
![][image52]

**Tip:** You may need to trim off excess vertices on the edges of the resampled cross-sections. If a portion of a  line does not have both ends on a “Stencilized Resample” cross-section it will not be resampled.  
![][image53] 

Once a line is fully quality checked you can “Approve” the line. You may also use the keyboard hotkey “E” to approve as well.  This will allow you to track progress by filtering lines by approval status.

![][image54]

## **Adding Linear Features**

**Tip:** In the case that you want to add a linear feature, you can select the “line” icon on the top bar. A pop-up will appear with features that you can manually indicate within Digital surveyor. Please note that you are not limited to the following features, which can be adjusted in your attribute template.   
**![][image55]**

**Tip:** You can add in an offset line in a cross section through the manual line add workflow. Right click on a line and select “create cross section”. Select your line of choice and place it on the pointcloud. A new line will be set that runs parallel to the originally selected line.  
**![][image56]**  
**![][image57]**

# **Sign Assembly QA/QC Workflow** {#sign-assembly-qa/qc-workflow}

**Step 1:** Open up the Dataset (select icon circled in red)  
![][image58]	

**Step 2:** Turn on “Color signs based on assemblies” (circled in red).  
![][image59]

**Step 3:** Once Dataset has loaded in, click middle button shown below and make sure “Type” is checked  
![][image60]

**Step 4:** Click the left button shown to filter sign assemblies and signs in order. Make sure sign assemblies are ordered first.  
![][image61]  
**Step 5:** Click on the crosshair icon with “Fly to object” to locate the first sign assembly.  
![][image62]

**Step 6:** Click the lock icon (circled in red) to lock or use the keyboard hotkey “L” onto the sign.  
![][image63]

**Step 7:** Fill in the subattribute information for the sign assembly. This may include support type, support count, the condition of the sign assembly and additional comments.  
![][image64]  
**Step 8:** Click on each sign above the sign assembly, and check the imagery using the “C” hotkey on the keyboard. Please fill in the subattribute information.  
![][image65]

**Step 9:**  Approve the sign if it looks complete (green button). Select the Delete (red button) if it looks like the sign was extracted improperly or does not belong.  
![][image66]

**Step 10:** To proceed to the next sign assembly, we must first click back on the first sign assembly we approved. This will bring about the original order we had filtered under the “Features” table on the left hand side. By selecting the crosshair icon or clicking the “+” hotkey on your keyboard, you will be brought to the next sign assembly. Continue until complete\!  
![][image67]

## **Sign Assembly Troubleshooting** {#sign-assembly-troubleshooting}

**Tip:** If a sign assembly and the signs above don't match in color, simply select a sign and hit the blue icon circled below on the bottom right. You will then select the sign assembly icon you would like to link it to. The sign color will change to yellow.   
![][image68]

**Tip:** If a sign is present with no sign assembly, select on the sign face and hit the green “+” icon circled below. This will require a new sign assembly to be added and change the sign color to green.  
![][image69]  
![][image70]

**Tip**: If you need to break the link between a sign assembly and a sign face, select the sign face and hit the red “Trash Can” icon circled below. The sign color will change to red.  
![][image71]  

