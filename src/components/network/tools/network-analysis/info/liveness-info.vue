<template>
    <b-modal lazy id="network-analysis-liveness-info" ref="network-analysis-liveness-info" hide-header>
        <h3>What does this analysis show?</h3>
        <p class="my-4">The network is scanned for sets of
            validating nodes that intersect every quorum (network blocking sets). It reports the minimum sizes as a risk analysis, and lists all the sets.</p>
        <h3>What does it mean?</h3>
        <p class="my-4">
            When all the nodes of a network blocking set fail, the network could halt. If the analysis indicates the
            minimum size is 3, then 3 specific nodes have to fail before this will happen.
        </p>
        <h3>Limitations of the analysis</h3>
        <p class="my-4">
            Stellarbeat indicates a node as 'not validating' if it was not validating in the latest crawl, a specific
            time window. However a node could be very slow or catching up. If other (fast) nodes of a network blocking
            set are down, the slow node could catch up and the network would continue to validate. Hence this graph is a
            risk analysis.
        </p>
        <h3>More information</h3>
        <p class="my-4">
            If you want to learn more about network blocking sets, check out the following <a target="_blank"
                                                                                              href="https://arxiv.org/pdf/2002.08101.pdf">white
            paper</a>, more specific the section regarding minimal blocking sets.
        </p>
        <template v-slot:modal-footer>
            <div class="w-100">
                <p class="float-left">Powered by <a target="_blank" href="https://github.com/wiberlin/fbas_analyzer">wiberlin/fbas_analyzer</a>
                </p>
                <b-button
                        variant="primary"
                        size="sm"
                        class="float-right"
                        @click="hideModal"
                >
                    Close
                </b-button>
            </div>
        </template>
    </b-modal>
</template>

<script lang="ts">
    import {Component, Mixins} from 'vue-property-decorator';
    import {
        BModal,
        BButton
    } from 'bootstrap-vue';
    import {StoreMixin} from '@/mixins/StoreMixin';

    @Component({
        components: {
            BModal,
            BButton
        }
    })
    export default class LivenessInfo extends Mixins(StoreMixin) {
        hideModal() {
            (this.$refs['network-analysis-liveness-info'] as any).hide();
        }
    }
</script>